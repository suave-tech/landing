import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    if(!data.name || !data.email || !data.message || !data.subject) return;
    fetch(
      `https://discord.com/api/webhooks/${process.env.REACT_APP_WEBHOOK_ID}/${process.env.REACT_APP_WEBHOOK_TOKEN}`,
      {
          method: 'POST',
          body: JSON.stringify({
              content: 'Message Received',
              embeds: [
                  {
                      title: data.subject || "",
                      description: data.message,
                      author: {
                          name: `${data.name} | ${data.email}`,
                      },
                      timestamp: new Date().toISOString(),
                  },
              ],
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      },
  )
      .then(() => {
          alert('Message successfully sent!')
      })
      .catch((err) => {
          console.error(err.message);
          alert('Message failed to send.')
      });
    e.target.reset();
  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="YOUR NAME"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          
          <div className="col-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="SUBJECT"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Subject is required</span>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;

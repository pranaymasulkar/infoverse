import React from "react";

const ContactLocation = () => {
  const iframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8794018033345!2d79.06858341493346!3d21.077478385972032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf03dc8f428b%3A0xa41789ca0bf47f24!2sInfoVerse%20Tech%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1650640214381!5m2!1sen!2sin";

  return (
    <>
      <div>
        <h3 className="white fs-24 fw-semibold mb-3">Find our office</h3>
        <iframe
          src={iframe}
          width="100%"
          height="260"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ContactLocation;

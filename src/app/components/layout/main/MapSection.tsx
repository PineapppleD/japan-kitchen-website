import React from "react";

export const MapSection = () => {
  return (
    <div className="w-full h-[400px] mt-[80px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2114.133956661035!2d56.248184692142274!3d58.00249990695806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8c72a8c790d0f%3A0x77c15efb5b4dae03!2z0J3QsNC80LgsINCv0L_QvtC90YHQutC40Lkg0YDQtdGB0YLQvtGA0LDQvQ!5e0!3m2!1sru!2skz!4v1753507545226!5m2!1sru!2skz"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

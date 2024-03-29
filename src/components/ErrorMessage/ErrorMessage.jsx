import React, { useState, useEffect } from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Змінюємо видимість повідомлення через 2 секунди
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Функція для закриття повідомлення при кліку на кнопку

  return (
    <div>
      {isVisible && (
        <div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;

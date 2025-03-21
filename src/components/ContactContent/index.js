import { useState } from "react";
import styles from "@/components/ContactContent/ContactContent.module.css";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      setStatus("Erro ao enviar mensagem. Verifique sua conexão.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>Fale Conosco</h3>
        <p>
          Entre em contato para mais informações sobre nossos serviços. Estamos
          aqui para ajudar!
        </p>
      </div>
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              className={styles.input}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="subject">Assunto:</label>
            <input
              type="text"
              id="subject"
              className={styles.input}
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              rows="4"
              className={styles.textarea}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </div>
  );
};

export default ContactContent;
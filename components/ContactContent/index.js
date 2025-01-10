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
      const response = await fetch("http://localhost:8080/contact", {
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
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
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
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </div>
  );
};

export default ContactContent;

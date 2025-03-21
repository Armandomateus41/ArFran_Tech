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
    setStatus("Enviando...");

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
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            className={styles.input}
            placeholder="Digite seu nome"
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
            placeholder="Digite seu email"
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
            placeholder="Assunto da mensagem"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            rows="5"
            className={styles.textarea}
            placeholder="Escreva sua mensagem aqui..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default ContactContent;
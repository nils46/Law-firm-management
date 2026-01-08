import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(10, "Mobile must be at least 10 digits").optional(),
  type: z.string().min(1, "Contact type is required"),
  notes: z.string().optional(),
});

export default function ContactCreate({ setContacts, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Saving contact:", data); // 🧪 DEBUG

    setContacts((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...data,
      },
    ]);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name</label>
      <input {...register("name")} />
      <p className="error">{errors.name?.message}</p>

      <label>Email</label>
      <input type="email" {...register("email")} />
      <p className="error">{errors.email?.message}</p>

      <label>Mobile</label>
      <input {...register("phone")} />
      <p className="error">{errors.phone?.message}</p>

      <label>Contact Type</label>
      <select {...register("type")}>
        <option value="">Select type</option>
        <option value="Person">Person</option>
        <option value="Company">Company</option>
      </select>
      <p className="error">{errors.type?.message}</p>

      <label>Notes</label>
      <textarea rows={3} {...register("notes")} />

      <br />

      <button type="submit" className="btn-primary">
        Save Contact
      </button>
    </form>
  );
}

import { motion } from "framer-motion";

const AddEmployeeModal = ({
  showModal,
  setShowModal,
  form,
  handleChange,
  handleSubmit,
  loading
}) => {

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 
        p-6 rounded-2xl w-100 text-white shadow-2xl"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          {form.id ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 rounded bg-white/20 placeholder-white outline-none"
            required
          />

          <input
            name="department"
            value={form.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full p-2 rounded bg-white/20 placeholder-white outline-none"
            required
          />

          <input
            name="salary"
            type="number"
            value={form.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="w-full p-2 rounded bg-white/20 placeholder-white outline-none"
            required
          />

          <input
            name="performanceRating"
            type="number"
            value={form.performanceRating}
            onChange={handleChange}
            placeholder="Performance (1-5)"
            className="w-full p-2 rounded bg-white/20 placeholder-white outline-none"
            required
          />

          <input
            name="jobSatisfaction"
            type="number"
            value={form.jobSatisfaction}
            onChange={handleChange}
            placeholder="Satisfaction (1-5)"
            className="w-full p-2 rounded bg-white/20 placeholder-white outline-none"
            required
          />

          <input
            name="yearsAtCompany"
            type="number"
            value={form.yearsAtCompany}
            onChange={handleChange}
            placeholder="Years"
            className="w-full p-2 rounded bg-white/20 placeholder-white outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 py-2 rounded-xl 
            bg-linear-to-r from-blue-500 to-purple-500 
            hover:scale-105 transition"
          >
            {loading ? "Saving..." : "Save Employee"}
          </button>

        </form>

        <button
          onClick={() => setShowModal(false)}
          className="mt-4 w-full text-red-400 hover:underline"
        >
          Close
        </button>

      </motion.div>
    </div>
  );
};

export default AddEmployeeModal;
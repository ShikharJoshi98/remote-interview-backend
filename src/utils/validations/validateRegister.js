const { z } = require("zod");

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email"),
  password: z.string(),
  role: z.enum(["interviewer", "candidate"])
});

module.exports = registerSchema;
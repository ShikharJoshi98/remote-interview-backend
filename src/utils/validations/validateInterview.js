const { z } = require("zod");

const interviewSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required"),

    email: z
        .string()
        .trim()
        .email("Invalid email address"),

    isAccepted: z
        .boolean()
        .default(false),

    interviewer: z
        .string()
        .min(1, "Interviewer id is required"),

    jobRole: z
        .string()
        .min(1, "Job role is required"),

    interviewType: z
        .string()
        .min(1, "Interview type is required"),

    interviewMode: z
        .string()
        .min(1, "Interview mode is required"),

    date: z
        .string()
        .min(1, "Date is required"),

    time: z
        .string()
        .min(1, "Time is required"),

    extraNotes: z
        .string()
        .optional()
});

module.exports = interviewSchema;
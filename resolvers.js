const { Student } = require("./src/Student");

const resolvers = {
  Query: {
    greetings: () => "GraphQL is Awesome",
    welcome: (parent, args) => `welcome ${args.name}`,
    getStudentById: async (parent, args) => {
      const student = await Student.findOne({ age: args.id });
      return student;
    },
    getAllStudents: async () => {
      const students = await Student.find({});
      console.log(students, "dents");
      return students;
    },
  },

  Mutation: {
    createStudent: async (parent, args) => {
      const { firstName, lastName, age } = args.data;
      const newStudent = new Student({
        firstName,
        lastName,
        age,
      });
      await newStudent.save();
      return newStudent;
    },

    updateStudent: async (parent, args) => {
      const student = await Student.findOneAndUpdate({ age: args.id }, args);

      return student;
    },

    deleteByAge: async (parent, args) => {
      await Student.findOneAndDelete({ age: args.age });
      return "delete successfully";
    },
  },
};

module.exports = { resolvers };

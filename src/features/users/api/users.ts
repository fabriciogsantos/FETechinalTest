export const createUser = async (user: User) => {
  // Simulate a network delay
  await new Promise((res) => setTimeout(res, 1000));

  // Simulate success response
  return {
    success: true,
    user: {
      id: Math.floor(Math.random() * 1000),
      ...user,
    },
  };
};

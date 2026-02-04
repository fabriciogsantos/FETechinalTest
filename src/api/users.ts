export type NewUser = {
  name: string;
  email: string;
  role: string;
  active: boolean;
};

export const createUser = async (user: NewUser) => {
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

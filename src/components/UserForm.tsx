import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Select,
  Checkbox,
  Text,
  useToast,
} from "@chakra-ui/react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("viewer");
  const [active, setActive] = useState(false);

  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      role,
      active,
    };

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) throw new Error("Failed to create user");

      toast({
        title: "User created.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      // TODO: Reset fields properly
      setName("");
      setEmail("");
      setRole("viewer");
      setActive(false);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error creating user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" maxW="md">
      <Text fontSize="xl" mb={4}>
        Crear nuevo usuario
      </Text>
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <label>Nombre</label>
          <Input
            placeholder="Nombre de usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box mb={3}>
          <label>Email</label>
          <Input
            placeholder="Email de usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box mb={3}>
          <label>Rol del usuario</label>
          <Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Lector</option>
          </Select>
        </Box>

        <Box mb={3}>
          <Checkbox
            isChecked={active}
            onChange={(e) => setActive(e.target.checked)}
          >
            Activo
          </Checkbox>
        </Box>

        <Button type="submit" colorScheme="blue">
          Crear usuario
        </Button>
      </form>
    </Box>
  );
}

export default UserForm;

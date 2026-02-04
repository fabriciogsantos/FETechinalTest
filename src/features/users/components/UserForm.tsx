import {
  Box,
  Button,
  Input,
  Select,
  Checkbox,
  Text,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useUserMutation } from "../hooks/useUserMutation";
import { User } from "../types/User";
import { UserFormValues } from "../types/UserFormValues";

function UserForm() {
  const toast = useToast();
  const { mutate, isLoading } = useUserMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserFormValues>({
    defaultValues: { name: "", email: "", role: "viewer", active: false },
  });

  const onSubmit = (data: UserFormValues) => {
    const payload: User = {
      name: data.name.trim(),
      email: data.email.trim(),
      role: data.role,
      active: data.active,
    };

    mutate(payload, {
      onSuccess: () => {
        toast({ title: "Usuario creado.", status: "success", duration: 2000, isClosable: true });
        reset();
      },
      onError: (err: any) => {
        toast({
          title: "Error creando usuario.",
          description: err?.message || "Ocurrió un error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };


  return (
    <Box p={4} borderWidth="1px" borderRadius="md" maxW="md">
      <Text fontSize="xl" mb={4}>
        Crear nuevo usuario
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box mb={3}>
          <FormControl isInvalid={!!errors.name}>
            <label>Nombre</label>
            <Input
              placeholder="Nombre de usuario"
              {...register("name", { required: "El nombre es obligatorio." })}
            />
            <FormErrorMessage>{errors.name && errors.name?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box mb={3}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email de usuario"
              {...register("email", {
                required: "El email es obligatorio.",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido." },
              })}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box mb={3}>
          <FormControl>
            <FormLabel>Rol del usuario</FormLabel>
            <Controller control={control}
              name="role"
              render={({ field }) => (
                <Select {...field}>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Lector</option>
                </Select>
              )}
            />
          </FormControl>
        </Box>

         <Box mb={3}>
          <Controller
            control={control}
            name="active"
            render={({ field }) => (
              <Checkbox isChecked={field.value} onChange={(e) => field.onChange(e.target.checked)}>
                Activo
              </Checkbox>
            )}
          />
        </Box>

         <Button type="submit" colorScheme="blue" isLoading={isLoading}>
          Crear usuario
        </Button>
      </form>
    </Box>
  );
}

export default UserForm;

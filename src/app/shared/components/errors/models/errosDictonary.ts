interface ErrorsDictonary {
  [key: string]: string;
}

export const errosDictonary: ErrorsDictonary = {
  required: 'El campo es obligatorio.',
  minlength: 'Este campo debe tener un minimo de caracteres de ',
  maxlength: 'Esta campo debe tener un maximo de caracteres de ',
  min: 'Solo debe tener un minimo de 10 asientos',
  max: 'Solo debe tener un maximo de 40 asientos',
  email: 'Debe ser un email válido',
  passwordsMustBeEqual: 'Las contraseñas no coinciden',
  checkUserEmail: 'El email ya se encuentra registrado',
};

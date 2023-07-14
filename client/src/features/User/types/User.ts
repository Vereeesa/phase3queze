export type User = {
    id: number;
    name: string;
    email: string;
    scoreUser: number;
  };
  
  export type ErrorMes = {
    message: string;
  };
  
  export type UserId = User["id"];
  
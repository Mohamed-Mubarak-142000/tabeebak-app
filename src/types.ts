export interface Speciality {
  speciality: string;
  image: string;
}

export interface Address {
  line1: string;
  line2: string;
}

export interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: Address;
}

export interface TabProps {
  label: string;
  value: string;
}

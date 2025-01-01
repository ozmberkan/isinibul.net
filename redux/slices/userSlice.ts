import { createSlice } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  surname: string;
}

export interface UserState {
  user: User;
}

// Başlangıç durumu
const initialState: UserState = {
  user: {
    id: "123",
    name: "Berkan",
    surname: "Özmen",
  },
};

// Redux Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Örnek olarak kullanıcı güncelleme aksiyonu
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Aksiyonları dışa aktar
export const { updateUser } = userSlice.actions;

// Reducer'ı dışa aktar
export default userSlice.reducer;

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from 'emailjs-com';

interface FormState {
  userName: string;
  email: string;
  phone: string;
  question: string;
  isFormSubmitted: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: FormState = {
  userName: '',
  email: '',
  phone: '',
  question: '',
  isFormSubmitted: false,
  isLoading: false,
  error: null,
};



// AsyncThunk для отправки данных формы по email через EmailJS
export const sendFormData = createAsyncThunk(
  'form/sendFormData',
  async (formData: Omit<FormState, 'isFormSubmitted' | 'isLoading' | 'error'>, { rejectWithValue }) => {
    try {
      const response = await emailjs.send(
        'service_vrh9078',
        'template_z4yusdd',
        formData,
        'BhuuaOHMUeTcw_mUS'
      );
      return response.text;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof FormState; value: string }>) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state as any)[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      state.userName = '';
      state.email = '';
      state.phone = '';
      state.question = '';
      state.isFormSubmitted = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendFormData.fulfilled, (state) => {
        state.isLoading = false;
        state.isFormSubmitted = true;
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Экспортируем действия
export const { updateField, resetForm } = formSlice.actions;

// Экспортируем редьюсер
export default formSlice.reducer;
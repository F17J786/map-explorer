import type { LoginFormValues } from '@/types/auth.types';
import type { User } from '@/types/user';
import { api } from '@/store/api/baseApi';

interface AuthApiError {
  status: number;
  data: string;
}

const createAuthError = (status: number, message: string): AuthApiError => ({
  status,
  data: message,
});

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<User, LoginFormValues>({
      queryFn: async (
        { customerId, password },
        _api,
        _extraOptions,
        baseQuery,
      ) => {
        const result = await baseQuery({
          url: '/users',
          params: { customerId },
        });

        if (result.error) {
          return { error: result.error };
        }

        const users = result.data as User[];

        if (users.length === 0) {
          return { error: createAuthError(404, 'Mã khách hàng không tồn tại') };
        }

        const matchedUser = users[0];

        if (matchedUser.password !== password) {
          return { error: createAuthError(401, 'Mật khẩu không đúng') };
        }

        return { data: matchedUser };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;

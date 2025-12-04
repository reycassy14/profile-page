<template>
  <div class="font-plus-jakarta min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black">
    <div class="container mx-auto px-4 flex items-center justify-center">
      <div class="w-full max-w-[480px] bg-black rounded-[20px] p-8 lg:p-10 border border-gray-800 shadow-2xl">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p class="text-gray-400 text-sm">Sign in to continue to your profile</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Input -->
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-300">Email</label>
            <Input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Enter your email"
              class="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
              required
            />
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-medium text-gray-300">Password</label>
              <a href="#" class="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
            </div>
            <Input
              id="password"
              v-model="formData.password"
              type="password"
              placeholder="Enter your password"
              class="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
              required
            />
          </div>

          <!-- Remember Me -->
          <div class="flex items-center gap-2">
            <input
              id="remember"
              v-model="formData.rememberMe"
              type="checkbox"
              class="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
            />
            <label for="remember" class="text-sm text-gray-400 cursor-pointer">Remember me</label>
          </div>

          <!-- Login Button -->
          <Button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-[12px] transition-all duration-200"
          >
            Sign In
          </Button>

          <!-- Divider -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-800"></div>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-black px-4 text-gray-500">Or continue with</span>
            </div>
          </div>

          <!-- Social Login Buttons -->
          <div class="grid grid-cols-3 gap-3">
            <Button
              type="button"
              variant="outline"
              @click="handleSocialLogin('google')"
              class="bg-gray-900 border-gray-700 hover:bg-gray-800 text-gray-300 py-5 rounded-[12px]"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              @click="handleSocialLogin('github')"
              class="bg-gray-900 border-gray-700 hover:bg-gray-800 text-gray-300 py-5 rounded-[12px]"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              @click="handleSocialLogin('twitter')"
              class="bg-gray-900 border-gray-700 hover:bg-gray-800 text-gray-300 py-5 rounded-[12px]"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Button>
          </div>
        </form>

        <!-- Sign Up Link -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-400">
            Don't have an account?
            <a href="#" class="text-blue-400 hover:text-blue-300 font-medium transition-colors ml-1">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default {
  name: 'LoginPage',

  components: {
    Button,
    Input
  },

  data() {
    return {
      formData: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },

  methods: {
    handleLogin() {
      console.log('Login attempt:', {
        email: this.formData.email,
        rememberMe: this.formData.rememberMe
      });

      // Add your login logic here
      // For now, just redirect to main page
      this.$router.push('/');
    },

    handleSocialLogin(provider) {
      console.log('Social login attempt:', provider);
      // Add your social login logic here
    }
  }
};
</script>

<style scoped>
/* Custom checkbox styling */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  display: inline-block;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: rgb(37, 99, 235);
  border-color: rgb(37, 99, 235);
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
</style>

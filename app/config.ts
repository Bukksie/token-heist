export function getWebsocketUrl(): string {
	const runtimeConfig = useRuntimeConfig()

	if (process.env.NODE_ENV === 'development') {
		return 'ws://' + runtimeConfig.public.origin
	}
	return 'wss://' + runtimeConfig.public.origin
}

export function getApiUrl(): string {
	const runtimeConfig = useRuntimeConfig()

	if (process.env.NODE_ENV === 'development') {
		return 'http://' + runtimeConfig.public.origin
	}
	return 'https://' + runtimeConfig.public.origin
}

export const RPC_URL = 'https://sepolia-rollup.arbitrum.io/rpc'
export const LS_PRIVATE_KEY = 'token-heist-private-key'
export const LS_CLIENT_ID = 'token-heist-client-id'
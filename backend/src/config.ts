import winston, { transport } from 'winston'
import dotenv from 'dotenv'
import * as packageJson from '../package.json'

const version = packageJson.version // get version from package.json

// Configure to read .env files
dotenv.config()

const storeLogs = process.env.STORE_LOGS === 'true'

const transports: transport[] = [new winston.transports.Console()]

if (storeLogs) {
	transports.push(
		new winston.transports.File({ filename: `logs/error_v${version}.log`, level: 'error' }),
		new winston.transports.File({ filename: `logs/all_v${version}.log` }),
	)
}

export const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		winston.format.printf(info => {
			return `${info.timestamp} ${info.level}: ${info.message}`
		}),
	),
	transports: transports,
})

export const CLIENT_URL = process.env.CLIENT_URL as string
if (!CLIENT_URL) {
	throw new Error('CLIENT_URL is not set in .env file')
}

export const PRIVATE_KEY = process.env.PRIVATE_KEY as string
if (!PRIVATE_KEY) {
	throw new Error('PRIVATE_KEY is not set in .env file')
}

export const SNEAK_VERIFIER_SEPOLIA = process.env.SNEAK_VERIFIER_SEPOLIA as string
if (!SNEAK_VERIFIER_SEPOLIA) {
	throw new Error('SNEAK_VERIFIER_SEPOLIA is not set in .env file')
}

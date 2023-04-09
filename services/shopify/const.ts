
//開発中はdevをtrueに、shopifyのapiはhttps通信しか受け付けない為

const dev = false
const ngrokUrl = "https://faa1-119-231-76-37.ngrok-free.app"

export const HOSTING_URL = dev ? ngrokUrl : process.env.NEXT_PUBLIC_HOSTING_URL

export const SHOPIFY_STORE_DOMAIN = "xn-tcklb1b4a7f0bzgpg.myshopify.com"

export const SHOPIFY_ADMIN_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_API_URL
export const SHOPIFY_STOREFRONT_API_URL = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_URL

export const SHOPIFY_COOKIE_EXPIRE = 90
export const SHOPIFY_CHECKOUT_URL_COOKIE = process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL_COOKIE
export const SHOPIFY_CHECKOUT_ID_COOKIE = process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_COOKIE_ID

export const SHOPIFY_CUSTOMER_ACCESS_TOKEN_EXPIRE = 30
export const SHOPIFY_CUSTOMER_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCESS_TOKEN

export const SHOPIFY_ADMIN_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_ACCESS_TOKEN
export const SHOPIFY_ADMIN_API_KEY = process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_API_KEY
export const SHOPIFY_ADMIN_API_SECLET_KEY = process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_API_SECLET_KEY
export const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCCESS_TOKEN
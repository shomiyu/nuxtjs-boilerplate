export default function ({ $axios, redirect }, inject) {
  // Set baseURL to something different
  const api = $axios.create({
    headers: {
      'X-MICROCMS-API-KEY': `${process.env.MAIN_API_KEY}`,
    },
  })

  // Inject to context as $api
  api.setBaseURL(`${process.env.BASE_URI}`)
  inject('api', api)
}

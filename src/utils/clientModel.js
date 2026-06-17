export function createClient(client = {}) {
  return {
    name: "",
    phone: "",
    email: "",
    clientSince: new Date().toLocaleDateString(),

    measurements: {
      bust: "",
      waist: "",
      hips: "",
      ...(client.measurements || {}),
    },

    appointments: [],

    payments: [],

    notes: [],

    jobs: [],

    ...client,
  };
}
export function createGarment() {
  return {
    id: Date.now(),

    name: "",

    type: "Dress",

    status: "Quote",

    dueDate: "",

    quote: 0,

    notes: "",

    measurements: {},

    fittings: [],

    alterations: [],

    photos: [],

    payments: [],

    created: new Date().toLocaleDateString(),
  };
}
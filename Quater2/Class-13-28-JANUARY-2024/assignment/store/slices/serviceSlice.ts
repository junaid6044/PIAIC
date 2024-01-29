import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  services: [
    {
      id: 1,
      title: "Web App Development",
      description: "We build scalable responsive and highly interactive web apps that are cross browser compatible"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "We build smart hybrid mobile apps for both android & iOS with high performance and reusability"
    },
    {
      id: 3,
      title: "AI Based Solutions",
      description: "We support and build smart AI based solutions using machine learning algorithms and Augmented reality"
    }
  ]
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState: initialState,
  reducers: {
    createService: (state, action) => {
      state.services = [...state.services, action.payload];
    },
    updateService: (state, action) => {
      state.services = state.services.map(service => {
        if (service.id === action.payload.id) {
          return action.payload
        }
        return service
      })
    }
  }
})

export const {createService, updateService} = serviceSlice.actions
export default serviceSlice.reducer
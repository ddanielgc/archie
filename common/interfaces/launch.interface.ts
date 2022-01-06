export interface ILaunch {
  id: string
  mission_name: string
  rocket: {
    rocket_name: string
  },
  links: {
    mission_patch: string
    mission_patch_small: string
  },
  details: string
}

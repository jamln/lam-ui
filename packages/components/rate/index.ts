import { withInstall } from "../with-install";
import Rate from "./rate.vue";

const LamRate = withInstall(Rate)

export type {
  RateComponent,
} from './types'

export default LamRate
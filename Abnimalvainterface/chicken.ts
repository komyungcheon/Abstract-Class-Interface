import {Animal} from "./animal";
import {edible} from "../Interface/edible";
export class Chicken extends Animal implements edible {
    makeSound() :string {
        return "Chicken :cluck cluck!"
    }
    howToEat(): string {
        return "Could be tried "
    }
}
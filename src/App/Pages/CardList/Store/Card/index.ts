import { createDuck } from "utils/store";
import { Card } from "../../services/loadCardList";

type State = {
  itemList: Card[];
};

const createInitialState = (): State => {
  throw new Error("Unreachable");
};

export const CardActions = createDuck({
  namespace: "Card",
  createInitialState,
  reducers: {
    set(state, cardList: Card[]) {
      state.itemList = cardList;
    }
  }
});

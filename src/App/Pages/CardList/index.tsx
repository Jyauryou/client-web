import { Loading } from "App/Atomics/Loading";
import { ThumbnailCard } from "App/Molecules/ThumbnailCard";
import { cardInformationPath } from "constants/Routes";
import React from "react";
import styled from "styled-components";
import { lazyComponent } from "utils/lazy-component";
import { loadCardList } from "./services/loadCardList";
import { CardListStoreProvider, useCardListSelector } from "./Store";

const Layout = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 8rem);

  padding: 1rem;
`;

const Loaded = () => {
  const itemList = useCardListSelector(({ Card }) => Card.itemList);

  return (
    <Layout>
      {itemList.map(({ id, thumbnail, displayName }) => (
        <ThumbnailCard key={id} to={cardInformationPath({ id })} source={thumbnail} title={displayName} />
      ))}
    </Layout>
  );
};

export const CardList = lazyComponent({
  async load() {
    const cardList = await loadCardList();
    if (cardList.isErr) {
      return () => <Loading.Error error={cardList.error} />;
    }

    const args = { Card: { itemList: cardList.item } };

    return () => (
      <CardListStoreProvider args={args}>
        <Loaded />
      </CardListStoreProvider>
    );
  }
});
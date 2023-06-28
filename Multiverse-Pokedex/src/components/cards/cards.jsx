import { useState } from "react";
import Card from "../card/card";
import "./cards.css";

const cards = () => {
    const NO_CARD_HOVERED = 0;
    const [active, setActive] = useState(NO_CARD_HOVERED);
    const loading = "lazy";

    const handleHover = (index) => {
    if (index === active) {
        return setActive(NO_CARD_HOVERED);
      
    }
    setActive(index);
  };

  const handleHoverOut = () => {
    setActive(NO_CARD_HOVERED);
  };

  return (
    <section className="cards">
    <Card
        value={1}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/staryu.svg"
        ImgAlt="Illustration du pokémon"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Staryu"
        ability="Water Blast"
        SkillImgSrc="./images/water-attack.svg"
        SkillImgAlt="Illustration du pokémon"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={2}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/staryu.svg"
        ImgAlt="Illustration du pokémon"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Staryu"
        ability="Water Blast"
        SkillImgSrc="./images/water-attack.svg"
        SkillImgAlt="Illustration du pokémon"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={3}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/staryu.svg"
        ImgAlt="Illustration du pokémon"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Staryu"
        ability="Water Blast"
        SkillImgSrc="./images/water-attack.svg"
        SkillImgAlt="Illustration du pokémon"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={4}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/staryu.svg"
        ImgAlt="Illustration du pokémon"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Staryu"
        ability="Water Blast"
        SkillImgSrc="./images/water-attack.svg"
        SkillImgAlt="Illustration du pokémon"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={5}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/staryu.svg"
        ImgAlt="Illustration du pokémon"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Staryu"
        ability="Water Blast"
        SkillImgSrc="./images/water-attack.svg"
        SkillImgAlt="Illustration du pokémon"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />

      
    </section>
  );
};

export default cards;
import { useState } from "react";
import Card from "../card/card";
import "./cards.css";

const cards = () => {
    const NO_CARD_HOVERED = 0;
    const [active, setActive] = useState(NO_CARD_HOVERED);
    const loading ="lazy";
    const fire ="#CF4655"
    const water ="#3c5aa6"
    const electric ="#EFC46F"
    const psychic ="#B693C0"
    const grass ="#66B274"
    const fireIcon ="./images/fire-attack.svg"
    const waterIcon ="./images/water-attack.svg"
    const electricIcon ="./images/electric-attack.svg"
    const psychicIcon ="./images/psychic-attack.svg"
    const grassIcon ="./images/grass-attack.svg"

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
        ImgAlt="Illustration du pokémon Staryu"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Staryu"
        ability="Pacifier Blast"
        color={water}
        SkillImgSrc={waterIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={2}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/blastoise.svg"
        ImgAlt="Illustration du pokémon Blastoise"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Blastoise"
        ability="Doh nut Approach"
        color={water}
        SkillImgSrc={waterIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={3}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/Charizard.svg"
        ImgAlt="Illustration du pokémon Charizard"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Charizard"
        ability="Destroy Springfield"
        color={fire}
        SkillImgSrc={fireIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={4}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/pikachu.svg"
        ImgAlt="Illustration du pokémon Pikachu"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Pikachu"
        ability="Thunder Graffiti"
        color={electric}
        SkillImgSrc={electricIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={5}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/bulbasaur.svg"
        ImgAlt="Illustration du pokémon Bulbasaur"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Bulbasaur"
        ability="Bad Breath"
        color={grass}
        SkillImgSrc={grassIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={6}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/psyduck.svg"
        ImgAlt="Illustration du pokémon Psyduck"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Psyduck"
        ability="Cry and roll"
        color={water}
        SkillImgSrc={waterIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
            <Card
        value={7}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/slowbro.svg"
        ImgAlt="Illustration du pokémon Slowbro"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Slowbro"
        ability="Serve a Duff Beer"
        color={psychic}
        SkillImgSrc={psychicIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
    <Card
        value={8}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/mrmime.svg"
        ImgAlt="Illustration du pokémon Mr. Mime"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Mr. Mime"
        ability="Back Alley Ciggy"
        color={psychic}
        SkillImgSrc={psychicIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
        <Card
        value={9}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/drowzee.svg"
        ImgAlt="Illustration du pokémon Drowzee"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Drowzee"
        ability="Fall Asleep"
        color={psychic}
        SkillImgSrc={psychicIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
            <Card
        value={10}
        active={active}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        ImgSrc="./images/exeggutor.svg"
        ImgAlt="Illustration du pokémon Exeggutor"
        ImgLoading={loading}
        ImgWidth="200px"
        ImgHeight="200px"
        title="Exeggutor"
        ability="Roll and Serve"
        color={grass}
        SkillImgSrc={grassIcon}
        SkillImgAlt="Emblème d'attaque"
        SkillImgLoading={loading}
        SkillImgWidth="30px"
        SkillImgHeight="30px"
    />
    
      
    </section>
  );
};

export default cards;
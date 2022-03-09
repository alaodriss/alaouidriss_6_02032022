function photographerFactory(data) {
    const { name, portrait ,city , country, tagline,price} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        /* Ajouter "city+country" +taglien+price */
        const span = document.createElement( 'span' );
        span.textContent = `${city} ${country}`;

        const ParaGraphe = document.createElement( 'div' );
        ParaGraphe.textContent = tagline;

        const priceUnit = document.createElement( 'p' );
        priceUnit.textContent = `${price}/jour`;

        article.appendChild(img);
        article.appendChild(h2);

        article.appendChild(span);
        article.appendChild(ParaGraphe);
        article.appendChild(priceUnit);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
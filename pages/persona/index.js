import { Fragment, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

function PersonaPage({
  data,
  page,
  numberOfPersonas,
  pageLimit,
  pages,
  categories,
  tags,
  prices,
}) {
  const router = useRouter();
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);
  const [items, setItems] = useState([]);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch("api/persona?search=" + query)
        .then((res) => res.json())
        .then((res) => {
          setResults(res);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onclick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <Layout>
      <Fragment>
        <section className="shop spad">
          <div className="container " ref={searchRef}>
            <div className="row">
              <div className="col-lg-3">
                <div className="shop__sidebar">
                  <div className="shop__sidebar__search">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Procurar..."
                        onChange={onChange}
                        onFocus={onFocus}
                        value={query}
                      />
                      <button type="submit">
                        <span className="icon_search"></span>
                      </button>
                    </form>
                  </div>
                  <div className="shop__sidebar__accordion">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-heading">
                          <a data-toggle="collapse" data-target="#collapseOne">
                            Categorias
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <div className="shop__sidebar__categories">
                              <ul className="nice-scroll">
                                {categories.map((category) => (
                                  <li>
                                    <Link href="#">
                                      <a>{category}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <a data-toggle="collapse" data-target="#collapseSix">
                            Tags
                          </a>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <div className="shop__sidebar__tags">
                              {tags.map((tag) => (
                                <Link href="#">
                                  <a>{tag}</a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="shop__product__option">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__left">
                        <p>
                          Mostrando 1-{pageLimit} de{" "}
                          {Math.ceil(numberOfPersonas / pageLimit)} resultados
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__right">
                        <p>Filtro por preco: </p>{" "}
                        <select>
                          <option value="">Descendente</option>
                          <option value="">Ascendente</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {active && results.length > 0 && <h1>123</h1>}
                  {data.data.map((persona) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      key={persona.id}
                    >
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          data-setbg={persona.avatar}
                        >
                          <ul className="product__hover">
                            <li>
                              <a href="#"></a>
                            </li>
                            <li>
                              <a href="#"></a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__item__text">
                          <h6>{persona.questions["QUESTION_1"]}</h6>
                          <h6>{persona.title}</h6>
                          <a href="#" className="add-cart">
                            + Adcionar ao carrinho
                          </a>
                          <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                          </div>
                          <h5>R${persona.price}</h5>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product__pagination">
                        {pages.map((pageNumber) => (
                          <Link href={"/persona?page=" + pageNumber}>
                            <a
                              className={(() => {
                                if (parseInt(page) == pageNumber) {
                                  return "active";
                                } else return "";
                              })()}
                              href="#"
                            >
                              {pageNumber}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const pageLimit = 20;

  const data = await fetch(
    process.env.BASE_URL +
      "api/persona?pid=all&page=" +
      page +
      "&limit=" +
      pageLimit,
    {}
  ).then((res) => {
    return res.json();
  });

  console.log(data.tags);

  const maxPages = Math.ceil(data.meta.length / pageLimit);
  const currentPage = parseInt(page);
  let pages = [];
  const inclusiveRange = (start, end, step) => {
    return Array.from(
      Array.from(Array(Math.ceil((end - start + 1) / step)).keys()),
      (x) => start + x * step
    );
  };

  if (maxPages <= 6) {
    pages = inclusiveRange(1, maxPages, 1);
  } else if (currentPage - 3 <= 0) {
    pages = inclusiveRange(1, currentPage + 5, 1);
    pages.push(maxPages);
  } else if (currentPage + 3 > maxPages) {
    pages = inclusiveRange(currentPage - 5, maxPages, 1);
  } else {
    pages = inclusiveRange(currentPage - 3, currentPage + 3, 1);
    pages.push(maxPages);
  }

  return {
    props: {
      data: data,
      page: +page,
      numberOfPersonas: data.meta.length,
      pageLimit: pageLimit,
      pages: pages,
      categories: data.categories,
      tags: data.tags,
      prices: data.prices,
    },
  };
}

export default PersonaPage;

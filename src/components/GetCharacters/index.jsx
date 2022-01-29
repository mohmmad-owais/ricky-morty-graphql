import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/Queries";
import ShowCharacterDetails from "./components/ShowCharacterDetails";

const GetCharacters = () => {
  const [pageVal, setPageVal] = useState(1);

  const [characterId, setCharacterId] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const { error, loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page: pageVal },
  });

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  function statusUpdadte(id) {
    setShowModal(true);
    setCharacterId(id);
  }

  function pageValue() {
    if (pageVal < 1) {
      setPageVal(0);
    } else {
      setPageVal(pageVal - 1);
    }
  }

  useEffect(() => {
    if (loading) {
      return console.log("Loading.!");
    } else {
      setCharacters(data.characters.results);
    }
  }, [data]);

  if (error) return <h3>{error}</h3>;

  return (
    <div className="w-full flex flex-col justify-center bg-gray-800 p-5 mt-10">
      <div className="justify-center flex">
        <input
          className="h-7 w-60 rounded-md mr-2 p-3"
          placeholder="Search Character.!"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <select
          className="rounded-md"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        >
          <option>Filter</option>
          <option>Human</option>
          <option>Alien</option>
        </select>
      </div>

      {loading ? (
        <div className="justify-center flex">
          <h2 className="text-white">Loading..!</h2>
        </div>
      ) : (
        <div class="flex w-full py-10 flex-wrap justify-center">
          {characters
            .filter((item) => {
              if (search === "" || search === "Filter") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.species.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              } else {
                return null;
              }
            })
            .map((item) => (
              <div
                key={item.id}
                onClick={() => statusUpdadte(item.id)}
                className="cursor-pointer hover:scale-105 hover:transition"
              >
                {/* Display Character Card */}
                <div className="w-[35rem] flex bg-zinc-700 rounded-lg m-3">
                  <img
                    className="rounded-tl-lg rounded-bl-lg w-56 h-56 m-0"
                    src={item.image}
                    alt=""
                  />

                  <div className="flex flex-col m-4 font-medium text-base text-white">
                    <h2 className="font-bold text-2xl hover:text-orange-500 cursor-pointer">
                      {item.name}
                    </h2>
                    <label>
                      &#9679; {item.status} - {item.species}
                    </label>
                    <label className="text-gray-300 mt-3">
                      Last known location:
                    </label>
                    <h2 className="hover:text-orange-500 cursor-pointer">
                      {item.origin.name}
                    </h2>
                    <label className="text-gray-300 mt-3">First seen in:</label>
                    <h2 className="hover:text-orange-500 cursor-pointer">
                      {item.location.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}

          {showModal ? (
            <ShowCharacterDetails
              characterId={characterId}
              setShowModal={setShowModal}
            />
          ) : null}
        </div>
      )}
      <div className="flex justify-center">
        <button
          type="button"
          disabled={pageVal === 1}
          className={` ${
            pageVal === 1 && "cursor-pointer"
          }  bg-transparent mr-3 hover:border-blue-500 text-white font-semibold
           hover:text-white py-2 px-4 border border-blue-500  rounded`}
          onClick={pageValue}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-blue-500 rounded"
          onClick={() => setPageVal(pageVal + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default GetCharacters;

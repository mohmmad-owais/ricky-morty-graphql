import React from "react";

import moment from "moment";

import { GET_CHARACTER } from "../../../graphql/Queries";

import { useQuery } from "@apollo/client";

const ShowCharacterDetails = ({ setShowModal, characterId }) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: { ids: characterId },
  });

  const character = data?.charactersByIds[0];

  const date = moment(character?.created).format("MM/DD/YYYY");

  if (error) return <h3>{error}</h3>;
  if (loading)
    return (
      <h3 className="absolute text-xl text-white font-bold">Loading..!</h3>
    );
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <img className="w-20 h-20" src={character?.image} alt="" />
              <h3 className="text-3xl items-center m-5 font-semibold">
                {character?.name || "Please wait.!"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 text-xl flex flex-wrap">
              <div className="w-2/5 mb-2 flex ">
                <label className="w-20">Status:</label>

                <label className="ml-3">{character?.status}</label>
              </div>
              <div className="w-2/5 mb-2 flex ">
                <label className="w-20">Specie:</label>

                <label className="ml-3">{character?.species}</label>
              </div>
              <div className="w-2/5 mb-2 flex ">
                <label className="w-20">Gender:</label>

                <label className="ml-3">{character?.gender}</label>
              </div>
              <div className="w-2/5  mb-2 flex">
                <label className="w-20">Created:</label>

                <label className="ml-3">{date}</label>
              </div>

              <div className="w-2/5  mb-2 flex">
                <label className="w-20">Origin:</label>

                <label className="ml-3">{character?.origin.name}</label>
              </div>
              <div className="w-2/5  mb-2 flex">
                <label className="w-20">Location:</label>

                <label className="ml-3">{character?.location.name}</label>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ShowCharacterDetails;

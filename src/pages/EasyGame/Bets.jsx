

export default function Bets({...props}) {

  const inputsBet = [
    {title: 'Aposta 1'},
    {title: 'Aposta 2'},
  ]

  return (
    <div className='fixed h-screen w-full p-10 backdrop-blur-sm z-20'>
      <div className='flex flex-col w-full h-full bg-gray-700 px-8 pt-20 max-sm:p-5'>
        <h2 className='font-bold text-yellow-400 text-6xl mt-5'>Faça sua aposta:</h2>
        <div className='flex flex-col mt-16'>
          {
            inputsBet.map((item, index) =>
              <div key={index} className='flex flex-col mb-6'>
                <span className='text-gray-500'>{item.title}</span>
                <div className='flex flex-row items-center'>
                  <input
                    value={props.getUserBet.bet[index] || ''}
                    onChange={props.handleInputChange}
                    maxLength={2}
                    placeholder='Digite aqui...'
                    className='p-3 mt-2 w-full text-white bg-gray-600 border-2 border-yellow-600 outline-none text-xl placeholder:text-sm rounded-lg'
                  />
                </div>
              </div>
            )
          }
          <button
            onClick={() => props.handleClearInput()}
            className='flex text-lg text-gray-500 hover:text-white focus:outline-none'
          >
            Refazer apostas
          </button>
        </div>

        <button
          onClick={() => props.setGetUserBet((prevState) => ({...prevState, state: false}))}
          className="flex justify-center mt-auto py-4 font-bold text-gray-700 w-full bg-green-400  drop-shadow-xl"
        >
          Registrar aposta
        </button>
      </div>
    </div>
  )
}
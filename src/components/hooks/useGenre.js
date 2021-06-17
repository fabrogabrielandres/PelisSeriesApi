



export const useGenre = (selectedGenres) => {

    if ( selectedGenres.length<1) return ("")

    const GenRedIds= selectedGenres.map((g)=> g.id )
      
      
    return GenRedIds.reduce((acc,curr)=> acc+","+curr )
}

function mod256WithoutMod(number)
{
  return number < 0 ? number + 256 * Math.floor(number / -256) 
                    : number - 256 * Math.floor(number / 256)
}
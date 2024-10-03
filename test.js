function getTime(time)
{
    const hour=parseInt(time/3600);
    let remainsecond=time%3600;
    const minute=parseInt(remainsecond/60);

    return ` ${hour} hours ${minute}second ago`;
}
console.log(getTime(7865));
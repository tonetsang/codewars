function sabb(s, val, happiness){
    s = (s.match(/[sabbatical]/gi) || []).length
    return s + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}
function FadeToWhite (Time: number) {
    color.startFade(color.originalPalette, color.White, Time / 2)
    color.pauseUntilFadeDone()
    color.startFade(color.White, color.originalPalette, Time / 2)
}
function SpawnText (text: string, X: number, Y: number) {
    textSprite = textsprite.create(text)
    textSprite.setPosition(X, Y)
}
function FadeToBlack (Time: number) {
    color.startFade(color.originalPalette, color.Black, Time / 2)
    color.pauseUntilFadeDone()
    color.startFade(color.Black, color.originalPalette, Time / 2)
}
let textSprite: TextSprite = null
FadeToWhite(4000)
effects.blizzard.startScreenEffect(5000)
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffff
    fffffcffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffff
    fffffffffffffffffffffffffffffffcfcffffcffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfffffffffccfffffffccffffffffffffffffccfffff
    ffffffffffffffffffffcffffccffffcfc8ccfcffffc8cfcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcfcffffcfcfccccffcfccccffffffffffffffffffffff
    fffffffffcffffffffffccfffffffffc8fccfcfcffffccfc8cccfffffffffffffffffffffffffcc666ffffffffffffffffffffffffffccccffcccffffffcccfccffffccccfcffcfcffffffffffffffff
    fffcfffffffffffffffcff8cf88ccfcffffcccfccfffffcfcf8ffffffffffffffffffffffffccc66668ffffffffffffffffffffffffcffffcffffffffcffccccc8cfcccffcfcccffffffffffffffffff
    fffcfffffffffffffffcff8cf88ccfcffffcccfccfffffcfcf8ffffffffffffffffffffffffccc66668ffffffffffffffffffffffffcffffcffffffffcffccccc8cfcccffcfcccffffffffffffffffff
    fffffffffffffffffffcccfffffffffccfcccffffcfffffffcfffffffffffffffffffffffffc8666ccc8cffffffffffffffffffffffcccccfffffffcfffffcffffffcffcccffc8ffffffffffffffcfff
    ffffffffffffffffcf88cffccfffffcfccfcffcffffffffffffcffffffffffffffffffffff866688ccc8ccffffffffffffffffffffcfccffffffffffffffffffffffcfcffcfc8ffcfcffffffffffffff
    fffffffffffffffccffffffcfccffffffccfcfffffffffffffccf88fffffffffffffffffffc6666688668887cfffffffffffffffffffffcffffffffffffffffffffffffff8ffffcccfffffffffffffff
    fffffcffffffffffcccffffffffffffffcfcffffffffffffffffffffffffffffffffffff88866c666668666ccfffffffffffffcfffffffffffffffffffffffffffffcffccfcffcfffffffffffffffcff
    ffffffffffffffffffffffffcffffffffffccffffffffffffffffccffffcfffffffcffcfc866c86c886c8688ccfff7fcffcffcffffffccffffffffffffffffffffffffffffffffffffffffffffffffcf
    fffffffffffffffffffcffffffffffffffffffffffffffffffffffffffcffcff7ffffff78c66c666ccc86ccf7fffcffcf7ffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffffffffffffffffffffffffcffcff7ffffff78c66c666ccc86ccf7fffcffcf7ffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcbc77c6c666cc886ccc8ffcffcc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffc7f7e778c6cc8ccccc66cccbff7cccfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffccffffffffffffffffffffffffffffffffffffffffcfffffffcfb8ccd77c6cccc66cc666686cc7788bc8fcffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffff
    ffffffffffffcfcffffffffffffffffffffffffffffffffffffffffffcfffffcb888f7dcccc66c6cccc66866ccd68cfccccfffcfffffffffffffffffffffffffffffffffffffffffcfffffccffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfcccccc7766cccc68c886cc868cc76c88cc887ff7cffffffffffffffffffffffffffffffffffffffffffffffcfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffcccfc778fc78c8b67ccccccc8cccccccc868dc6c88cc8bcbe7cccccfffffffffffffffffffffffffffffffffffffffffcfcffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffcccfc778fc78c8b67ccccccc8cccccccc868dc6c88cc8bcbe7cccccfffffffffffffffffffffffffffffffffffffffffcfcffffffff
    ffffffffffccfffffffffffffffffffffffffffffffffffffffcccccccdb7c67c88ff6ccccccc6668868cc6cccd8bccdecc777c7ccffffffffffffffffffffffffffffffffffffffffffffffcfffffff
    fffcffffffffffffffffffffffffffffffffffffffffffffffffc77ff6f767c7dcfccbcccccc6cccccccccccccbccdd77c7776c7cfcffffffffffffffffffffffffffffffffffffffffccfffffffffff
    fffcfffffcffffffffffffffffffffffffffffffffffffffcffcfcccf8f6c7988d7cc6ccccc66cc8666cc6cccc7db77777777c88cccfffbcfffffffffffffffffffffffffffffffffffffcfffcffffff
    ffcffffffcffffffffffffffffffffffffffffffffffffffcfffccccfcfcfc8888bb7778ccc88c8688ccccc6cd77d776677cc8ff7cffffdfffffffffffffcffcffffffffffffffffffffffffffffffff
    fffcffffcfcffffffffffffffffffffffffffffffffffffffffffcccfc7cfc88688d6d7c8cccccc6cccccccccdd7777ccccbfcfccfcfffcfffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffcfffffffffffffffffffffd66bfffffffffffffcffff668cccccc686686c77dbbccc88cccc6cc8bcd77cccc6ccccccfcfffffbcfffffffffffffffffffffffffffffffffffffffffffcffff
    fffffffffcffffff68666666666888888888ffffffffffffcffff668cccccc686688d77dbbccc88cccc6cc8bcd77cccc6ccccccfcfffffbcfffffffffffffffffffffffffffffffffffffffffffcffff
    ffffffffcffffffd888888888888888866686ffd888fffffcffffff8dfcc88686688ddbd77ccccc666cccc7b7bbccccb8cc8cccc8c8fffdffffffffffffffffffffffffffffffcffffffffcfffffffff
    fffffffcfcffccfb866666666666688866688ff68888ffffbffcbff8d888c8686688dddcd7d7dccccc6cccdc7bd7c8cdd7d888cf8fc8ccdfffffffffffffffffffffffffffffffffffffffcfffffffff
    fffffffffffcfffb866666666666688866686df686686fffb8ffcccccc888c886688dddc777dc6c6cc88cd6c76bc88ccccc888cccc8888cfffffffffffcfffffffffffffffffffffffffffffffffffff
    ffffffffcfffffff88888866688888d88888ddd686688ffd66d88ff66b8c88886686dddcd66db6b6ccccdb6cccccccccccc8ccccf88ccccffffffffffffffffffffffffcccffffffffffffffffffffff
    cfffffffffffffffd88888668886bdb88886ddd6866888888888dc88888dcc886686dddb88888888b6c7d7cccccbc68cccc8c888bcc888bffffffcfffffffffffffffffccccfffffffffffffffffffff
    ffffffffffffffcffffd886688dddd686688db888668888886688d8866888c88668bddb8868666688b66dd7cccccfcccbcc888ccccc888bfffcccbffffffffffffffffffffcfffffffffffffffffffff
    fffffffffffffffffffd886688ddddb86668b8866666668886688c886668d886668bdb886666666688668ddbbc7cccc8ccc8cccccb8888bfff8cfffffffffffffffffffffcffffffffffffffffffffff
    fffffffffffffffffffd866686ddddb8666888666666668886668d886668dd86668dd8866688886668d68ddbbc7cccc8ccc8cccccb8888bfff8cfffffffffffffffffffffcffffffffffffffffffffff
    fffffffffffffffffffd86668bddddb8666888686668888886668d886688db86688db8666886b866686d866ddb7ccccccccc8cc8c8cc88bfffc8fffffffffffffffffffffffffffcffffffffffffffff
    fffffffffffffffffffb86668bdddf686688b88866688bd886688d886688d686688d8866686dd886686dd6cdb8ccbccc8cccc8c8cfccccfffffffffffffffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffff686688ddddf886688d6886668ddd886688d866688d686688d886688ddd886686dd668ccc777ccb8cbccc8cbccccbcbffbbfffffffffffffffffffffffffffffffffffffffffff
    fffffffffcfffffffff686688ddddf886688dd686688ddd866688b866686d886688d866688ddd886686dddccc68c67cc7c7bccc88c8cccbfffbfffffffffffffffffffffffffffffffcfffffffffffff
    fffffffffcfffffffff886688ddddf886686dd886688ddb86668b8866686d886686b866686ddd86668bddd88668ccccc7c7cccc88b88ccdccfcffffffffffffffffffffffffffffffffccffffffffffc
    fffffffffffffffffff886688dddcf88668bdd886688dd686668b866668bd886686b86668bddb86668dddd686666ccccccc7cbfc8b88ccccfffffffffffffffffffffcfffffffffffffcffffffffffcc
    fffffffffffffffffff886686dddcf86668bdd886686dd6866688866668bd88668bd866686dd886688dddd686666ccccccc7cbfc8b88ccccfffffffffffffffffffffcfffffffffffffcffffffffffcc
    fffffffffffffffffff866686dddfc86668bdd88668bdd6866688668668bd86668bd886688d8866686dddd6cc8868cc6c8ccccccfbc8ccffcffffffffffffffffffffffffffffffffffccfffffffffff
    ffffffffffffffcffff886686dddf888668ddd88668bddb866686688668bd86668bd8866688886688dddd6666886668c88cccc88ccbcddcfffffffffffffffffcffffffffccffffffffcffffffcfffff
    fffffffffffffccffff88668bdddff88668ddd88668bddd886666888668bd88668bdd88666666688bdddd666666666686c6666c888cbffcffffffffffffffffffffffffffff8fffffffffffffcffffff
    ffffffffffffffcffff886686dddff98868bdd88668bddd8866688688686d886686ddb8866666886ddddd6666666666668668cccccccccccff8ffffffffffffffffffffffffccfffffffffffffffffff
    fffffffffffffffffffd88688dddfff8888bddb8668bdddd888886db8888db8888bdddd8888888bddddd66666666666666668cccccc8ccbfff88fffffffffffffffffffffffffcfffffffffffcffffff
    ffffffffffc6ffffffffd8886dddffffb86dddd88886dddffb66ddddd88bddd666dddddddb6bbddddddd7fccc66666666c666c6ccccccccfff88cfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffc6ffffffffffbbddddffffffddddff688bdddffcddddddddddddddddddd6cbdddddddddddf7fccc66666666c666c6ccccccccfff88cfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffccffffffcffffddddffffffffddfffffddddcfcccddddddddddd666ddddde77cdddddddbecfc7de666666666666666ccc8ccbccf8cffffffffffffffffffffffffffcfffffccffffffffff
    fffffffffffcbffffcfffffffdffffffffffffffffddddcfbcccc8868cc6666666cbfccc7c7cdddccccfffcb77fc666666666666ccccccbfcf88cfffffffffffffffffffffffffff686fbfffffffffff
    fffffffffffcbfffffffffffffffffffffffffffffbccfffec88ccccccc6c666ccccffcccfffccfcffcffb7c77ecc6666666666cc6ccbbbfcfcccfffffff6fcffffffffffffffffd8888cfcfffffffff
    fffffcfffffccfffffffffcfffffffffff6fcfffffbccfffef8c6cccccc66666bcffccfcbccffffcffcfffffcfc7fcb666686686c6ccbbbcffc8ccffffffffccffffffffffffcffd86686fcfffffffff
    fffffccffffc6ffffcfff6fffccfffffffc88fffcfb88ffcec666cc666666666bcffbcfcb66dcffffffffffffffc666db66666666c6cbbbfff8cfcffffff6cffffffffffffffcfff88688fcfffffffff
    fffffccfffffcffffffff6ff6ffffffffffffffffff88ffbec6666666666666dcffbfbf688886ffcccfffffffff88888dbc666666666bbbfffccfcffffcfcccfffffffffffff6ffd88668dffffffffff
    fffffccfffffcffffffff6ff6ffffffffffffffffff88ffbec6666666666666dcffbfbf886688ffcccffffffffd886688bc666666666bbbfffccfcffffcfcccfffffffffffff6ffd88668bdfffffffff
    ffffffccfffccffffffff6fffffffffffffffcfffff8cfcbd666666666666cccffffbcf866668dffffffffffffb866688bc666666666ddcfffccffffffccccffffffffffffff6fff86668bddffffffff
    ffffffccffffcfff6ffffcfffffffffffffffccfffccccfbd66666666666ccfbfffffff886688dd9999dffffff9886688dd666666666ccbfffccccffffcc8cffffffffffffff6ffd86668dddcfffffff
    fffffffccfffcfff7686f6ff6ffffffff88bffcd6bfcccff66db6b6666b66dffffd86cf688886ddd999b6bdcfff88888bdd766b6db6bdcdcf888dffffb69fffffc6fffff96696ff986668dddcfffffff
    ffffffffffffcbfff8888fffdb6bffffb8888f88888bcfb88888888b688888dcff8888f88888dddd88888888dff88888ddddd888888886bcf8888df688888f6ffffb888888888ffb86688dddcfffffff
    ffffffffffccccfff86686f688888bff986688886688cb88686666886886688ffc88686886686dd8886666688cd86688bddd88668666886df88688888666886fff88886886668bf686688dddccffffff
    fffffffffffcccccf8868888866688bff86688866668b886666666688886668dfd86688886688db8866886668bd866686dd886666666688df8866888666688dff8886668886688f686688dddffffffff
    ffffffcfffffcc7df88668866666688df886686666688866688886668886668bd686688886688d886688886686d866686d88666688866686d8866886886668bd88666888886688d886688dddffffffff
    ffffffcfffffcc7df88668668886668bd886668886688666886b866688866686d88668b886688d886686886686d866686d8866688d886688d8866868886668bb8866886d886686d886686dddffffffff
    fffffccffffccc7bc886686888866686d86666886688866686dd886686886688b86688d886686d88668888688db86668b6866688dd886688d8866688886668b8866686dd86668bd88668bdddfffcffff
    ffffffffffffccc7b8866688bd866686d8666888688886688ddd886686886688886686d86668bd8866688888bdb86668d886668ddd886688d8866688b86668d886688ddb86668bd88668bdddffffffff
    fffffffffffffcc7b8866686db866686b8666888888866688ddd88668688668886688db86668ddd88666688bdd686688d886688ddd886688d886688d686688b866686dd686668db86668ddddffffffff
    ffffffffcffffccc7886688dd686668b686668bbbdb866686ddd86668b6866888668bdb86688ddd888666688bd886688d886688ddd886688d866688d886688686668bdd886688db86668ddddffffffff
    fffffffcccfffffc7886688dd886668d686668ddddb86668bddb86668db866686688dd686688db88888866688d886688d886688ddd86668bb866686d886688686668bd6866688d686688ddddfffffcff
    fffffffccfcffffcc86668bdb866688d886688ddddd866686dd886688dd86668688bdd886688d886688886668d886686d886688dd886688d686668bd866686686668bb8866688d686688ddddffccffff
    fffffffccfcffffcd86668dd8866686d886688ddddd886688d8866686dd88666688ddd886688d88668b686668b886686d886688db886688d886668db866686b86668888686688d886688dddfffccffff
    fffffffcfffccccfb86688b8866688dd886688ddddc6866688886688ddd8866688dddd686688d866688886688d886686db866688886688bd886668db86668bb86668886686688d886688dddffcfcffff
    fcffffffccfc6ccf6866888866688bdd886688ddddcd88666666688bddd6866686ddddb86688d886668866688d686686dd886666666888dd886668dd886688d88666666886688d686688dddfccffffff
    ffffffffccffcccc6866888666886ddd886688dddfb6b8866666886ddddb86688ddddd188688db8866666888bdd88686ddd8866666888ddd686668dd886668868866688888688db88688dddfcfffffff
    ffffffff8cffcf6788668888888bddddd88888dddfb66d8888888bdddddd88888ddddd1d8888ddb88888888ddddb8888dddd88888886ddddd88888ddd888888d6888888db8888bd88888dddccccfffff
    fffffffffccffcc7886688b666dddddddd666ddddfc66ffdb6bbdddddddfd66bdddddc11d88bddddb6666bddddddb88ddddffdb66bdddddddd666bddddb666dddb66bddddb888dddb66bdddcffffffff
    ffffffffffccfffc886686ddddddddddfffddddddff6cfffddddddddddffffcddddd111117ddddddddddddddddddbfdddddffcddddddddddff66ddddddcddddddddddddddddddddddddddddcffffffff
    ffffffffffccfffd866686ddddddddfffff6ddddfff6cfffdddddddd6cffffcddddc1111179ddd1111dddddddd1bbfcdddfffc9ddddddddcff66ddddffccddddddddddddddddddddccddddccffffffff
    fccfffffffcffff9866686ddddddfffffff6cccfffffcfffdc6ddd9666dfffccfccbb111179111111111dddd111ccffffcffff9666ddcccfff66ffffff8ccc6ffffffcddfdd77ccceecffcfcffffffff
    fbfffffffffffcf9866688ddddffffffff8dc6ffffffffffb666699666fcfffcffffc1111991111111111d911117fcfffffcfd966666cccfff66fffffffcfc6cfffbcffffbd7ccfeecffccffffffffff
    ffcffffffffccffc866688dddffcfddfff88cfcfffffffff7c666666669ffffffffccc11199111111111199f11ff7fcffcfffb966966ccccfff6ffffffffccc8fcddfffff7d7c8fbcccfcfffffffffff
    ffdffffcfffffffc886688dddffffc7df888ccffffffffff7b669996666bffffffbcdcdc19911111111119911dcccffcffffbb966966ddffffccccffffffccc8cc77cffffd76ccccfffffcffffffffff
    fddffffffffffcffd88888dddddfc6c7b888cfffffffffccfdc6966666bcffffffccfbbb1991111111111cccbfbccfccfcfffcf66967dd7fcffffffffffccc88c77ccffff76ccfbeffffffffffffffff
    fffffffffffffcfcccb66ddddbb7fcc7dfcccfffffcbffff7ecf66696c6cffffffcfcccbdc9111111111b1cbcfbccfcffccfffcc666dffffffffbfffffffc888777cfdd7777ccccccfffcfffffffffff
    fffffffffffffcfccccddddddbb7fcc7dfcccfffffcbffff7ecf66696c6cffffffcfcccbdc9111111111b1cbcfbccfcffccfffcc666dffffffffbfffffffc888777cfdd7777ccccccfffcfffffffffff
    ffbfffffffffcffcfffcdddd766cdfcc7dccccfffffcfffff77f6666ccfffffffffffbb7cbd111111111d1cccccfffffccfffcf76cc7fffffffcffffffffcccc7ccfc7cbbeeefbffcffffcffffffffff
    fccfffffffffccffffccffffcccc7fcc77cccffffffffffffff7cfffccfffffffffffffcfbdd11111111bdcfccfbcfffffcff6cfff7efffffffcffffffffcc677cffdeecccfcffccffffffffffcfffff
    fbcfffcfffffccfffcfffcc7beeec7defc88fffffffffcffffffbffffcfffffffffccfcfcccd1111ddcdccfffccffff6ccfffffff77ffffcffccffffffffcccfcc7ddeebbe7cffcfffffffffffcfffff
    fcdffffcfffffcffcffccfffcccf7c7cfccffffffffffffff77ffffffcdffffffffccffffccb1d1dddccffcc7fffffffffffbbcfcff777fffffffffffffffcc88c777fcffc6fffcfcffffffffcffffff
    ffcffffcffffcccffffccffccccbfc777ffcffffffffffffffccdfffcccbbfbbbbdcfffffcffccbcccddfbfcffffbbbffffddddef7fffffffffffffffffffffffd776bcbb7ccfcffffffffffffffffff
    fbbffffffffffcfcffffcffcbeeeefc77dccfffffccfffcffffff77fffccfdffcbffffdddfdddddddddddddfccbcdcffccfbdcff7cfffffffffffffcfffffffcd77efeeeefcccccffcffffffcfffffff
    fcfffffffcffffccffffccfcfcccffc6c7ffffffffccfffffcccfccfffcfcdfcfffcfffffffcffc8fffffccfcfffccfbfd7bccff7fccffffffffffffffccffff76cccceccffccffcffffcfffffffffff
    fcfffffffcffffccffffccfcfcccffc6c7ffffffffccfffffcccfccfffcfcdfcfffcfffffffcffc8fffffccfcfffccfbfd7bccff7fccffffffffffffffccffff76cccceccffccffcffffcfffffffffff
    fbbfffffffffffffcfffffccfccccfeee7fcffffffffcfffcffffcccdffffcdffffdfcdbbfcccccccccffffffbbbfccf7fffffddcdbcffffffffffffffffffffcbbefccffcffcffcfcffffffffffcfff
    ffcfffffffffffffffffccfffffcfffebccfbfffffffffffffffffffcdfffffbfffcbfcfffffffffffcfffbffedcfccfdbfffcdedfffffcffffffffffffcccffccecffcffffcffffffffffffffffffff
    ffffffffcffffffffffffcfffcccffccccfceffffffffffffffffffffdcdfbfcffcffcffffffffffffffffdccffffbcffffcfdfffccffffffcfffffffffbdbffcfecfcfffffcfffcffffffffffffffff
    bbbffffffffffffffccffffffffcffffceefcecfffffffffffcfffffffbbffccffcfffcccfccccccccccccfffcfcbcfcffffbefffffffffffffffffffffceccecffffcffffffffccffffffffffffffff
    ffffffffcffcfffffffffffffffffffcecbfcccfffffffffffffffffffffffffbfcfffcbcffffffffffffffff8ffccfcfcffbcffffffffffffffffffffcccfcecffffcffffcfffcffffccfffffffffff
    fbffffcfffffffffffcfffcfffffcffffceffeeffffffffffffcfffffffffdddbfffffffccffffffffffffffffffcbffbffbffffffffffffffffffffffbccfefffffcffffccfffcfffcffffcffffffff
    fbffffcfffffffffffcfffcfffffcffffceffeeffffffffffffcfffffffffdddbfffffffccffffffffffffffffffcbffbffbffffffffffffffffffffffbccfefffffcffffccfffcfffcffffcffffffff
    ffcffffffffffffffffffffcfffffffffcffffffffffffffffffffffffffffbcfdcff7cfffffcfffffcffcffffcbbdddcfbccffffbdffffffffffffffffffffccffffffffcfffcffffcfffcfffffffff
    fbfffffffffffffffffcffffffffffffffffffcfffffffffffffcccfc6fffffffffffccccffffffffffffffcfcfcffffffcfffffbbffffffffcfffffffffffffffcffffffccffccfffffffffffffffff
    fcbfffffffffffcfffffffffcfffffecffcffffcfffcfffffffcffffffffffffcfffddffffccffffccff66f6cfcccffffffffffcffffffffffffcffffffffffffbccffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffffcfcfffefffffffffffffffcccccfffffffc6cffcff767677777777777cc77766c7cc666cfcfffcfccdbbfffffffccffceeffccfffffffffffffffffffffffffffff
    fcfffffffffffcffffffcffffffffffffffcefffebffffffcffccddf6666cc67fbfef666777d7ddddddddd77cc7766666667676666ccbbfffffffffffffceffffcfcffffffffcfffffffffffffffffff
    bbbfcffffffffccffffffcffffffffffffffebfccccffccfffcfcffbbe6fffc6777d7777677d7dd7dd7d777dd777777777767766cccccccffffffcfebfffbcffffffffffffffffffffffccffffffffff
    bbbfcffffffffccffffffcffffffffffffffebfccccffccfffcfcffbbe6fffc6777d7777677d7dd7dd7d777dd777777777767766cccccccffffffcfebfffbcffffffffffffffffffffffccffffffffff
    ffffffffffffcffffcffffcffffffffffcfffcfffcebfcffcffccfffcfc67677777777d777dddd7ddd7dcc7dd77e77777777777777776666ffccfcbfcffcfffffffffcfccffcffffcffffffffcfffffc
    fcbfcffffffffffffcffffffffffffffffffffffffccfcfffccffddcc6677777777777777d7ed777dddd7dd7dcde77777cccc7777777776ffcccfffcffffffffffffffffffcfffffffffffffcfffffff
    fffffffffffffffffffffffffffffffffccfffffffffcfcfcffffffcfc676c77777767777cceb77777d777ffffffb777dcecccc77676666fc66fbfcffffffffffcfffffffffffffffffffffffffffffc
    fcbffffffffffffffffffffffffffffffffffffffffffffffffffffffc7667ccf6667777dcfff76677b77b7cf7cfcc6cffffbddc6bccffcc6fccfffffffffff6fffffffffffffcfffffffffffffffffc
    fbffffffffffffffffffffffffffcfffffffffffffccffffffcfcffcf6c67777766666ffffff7cc7777dd7777e77777fdddcfccfc77666666ffcccffffffffffffffffffffffffffffffffffffffffff
    fbcffffffffffffffffffffcffffffffcffffffffcffccf6fc6c6ccff6f7766c666777d7677766777767776777776ccbcfffffffff6666f667ccfcffcfffcffffffffffffffcffcffffffffffffcffcf
    fbcffffffffffffffffffffcffffffffcffffffffcffccf6fc6c6ccff6f7766c666777d7677766777767776777776ccbcfffffffff6666f667ccfcffcfffcffffffffffffffcffcffffffffffffcffcf
    bbbfffffffffffffffffffffffffcfffffffffffffffccfffcffffffcffcfffffff76f6c6cc766c66667f7777776fc7cffffcfcfff7cfff6ffffffffffffffffffffcfffffffffffffffffffcfffffcf
    fcffcfffffffffffffffffffffffffffffffffffffffffffccffffffffccffcfffff6f6ffcccccffcccccff7c6cffc66cccfcffcffcfffffffffffffffffffffffffffffffffffffffffffffffcfffff
    bcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffcfcfffffffffffffffffffffffffcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff
    ffbfffcfffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffcffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcff
    ffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffff
    `)
SpawnText("Press Start", 76, 110)

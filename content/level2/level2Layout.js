import { generateMappings } from "../generalMappings.js"

export const level2Mappings = generateMappings("happy-birthday")

export const level2Layout = [
    [
        '5                                                     5',
        '5                                                     5',
        '5   011112                011112              012     5',
        '5                                                     5',
        '5                                  0112               5',
        '5   011112             012                            5',
        '5             012                                     5',
        ' 333333                      012           012        5',
        ' 444444                                               5',
        ' 444444   012                                         5',
        ' 33333333333333333333333333333333333333333333333333333 ',
        ' 44444444444444444444444444444444444444444444444444444 '
    ]

    /* coordenada plataformas
    [
        '5                                                     5',
        '5    beca                 beca3              beca8    5',
        '5   011112                011112              012     5',
        '5                                  beca6              5',
        '5    beca1             beca4       0112               5',
        '5   011112     *       012                            5',
        '5             012            beca5        beca7       5',
        ' 333333                      012           012        5',
        ' 444444   beca2                                       5',
        ' 444444   012                                         5',
        ' 33333333333333333333333333333333333333333333333333333 ',
        ' 44444444444444444444444444444444444444444444444444444 '
    ]
    */
]
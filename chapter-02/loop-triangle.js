/*

write a loop that makes seven calls to console.log 
to output the following triangle

#
##
###
####
#####
######
#######

*/

let string = '#'
do {
    console.log(string)
    string += '#'
} while ( string.length <= 7 )
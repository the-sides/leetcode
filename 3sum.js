
var threeSum = function(numss) {
    const nums = numss.sort((a, b) => a - b);    
    const results = [];
    console.log(nums)
    for(let s1i = 0; s1i < nums.length-1; s1i++) {
        const p1 = nums[s1i];
        
        // Bc nums is sorted, once you reach an impossible combination, move on to new p1
        let s2i = s1i + 1;
        let c2 = 0;   
        // console.log('1', s1i)
        while(nums[s2i] !==  undefined) {
            // console.log('2', s2i)
            // console.log(`p1: ${p1} p2: ${nums[s2i]} p3: ...`)
            c2 = p1 + nums[s2i]
            if(c2 > 0) break; // Bc it's only getting further away from here
            // if(c2 < 0) {s2i += 1; continue;}
            
            
            // When starting hunt for p3, don't bother with the p1s you've already seen, since 
            // The potential combination would've been possible with p1s value in that first spot
            let s3i = s2i + 1;
            let p2 = nums[s2i]
            console.log(`p1: ${p1}   p2: ${nums[s2i]}    i3: ${s3i}`)

            while(nums[s3i] !==  undefined) {
                console.log(`p1: ${p1} p2: ${nums[s2i]} p3: ${nums[s3i]}`)
                // if() {s3i += 1; continue;};
                if(c2 + nums[s3i] > 0)   break;
                if(c2 + nums[s3i] === 0) results.push([p1, p2, nums[s3i]]); 
                // If you reached here, you valid
                s3i += 1; 
            }
                  
            s2i += 1;
        }
    }
    return [...new Set(results.map(JSON.stringify))].map(set => JSON.parse(set));
};

console.log(threeSum([-1,0,1,2,-1,-4]))
import React from 'react';

import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs';
import {BsPerson} from 'react-icons/bs';
import {GrMenu} from 'react-icons/gr';
import {GrClose} from 'react-icons/gr'

export const navlist_1=[
    {
        id:1,
        name:"Galaxy 5G",
        link:[],
        img:null,
        link_1:null,
        link_2:null,
    },
    ///////////////////////////
    {
        id:2,
        name:"Mobile",
        img:'mobile.webp',
        link_1:'Pre-order the all-new Galaxy S20 FE 5G. Get $70 instant credit toward accessories and more.',
        link_2:'Pre-order now',
        link:[
             {
                 title:'Featured',
                 links:['All Smartphones','Galaxy Note20 5G','Galaxy S20 5G','Galaxy Z Fold2 5G','Galaxy Z Flip','Galaxy A71 5G','Galaxy Buds Live','Galaxy Watch3','Galaxy Tab S7','Connect Your Galaxy']
             },
             {
                title:'Smartphones',
                links:['All Smartphones','Galaxy Note','Galaxy S','Galaxy Z Flip','Galaxy A','Galaxy 5G','Accessories','Unlocked By Samsung','Monthly Subscriptions','See Featured Products']
             },
             {
                 title:'Tablets',
                 links:['All Tablets','Galaxy Tab S','Galaxy Tab S','Galaxy Tab A','Galaxy Book S','Accessories','See Featured Products']

             },
             {
                 title:'Watches',
                 links:['Galaxy Watch3','Galaxy Watch Active2','Galaxy Watch Active','Galaxy Watch','Galaxy Fit','Accessories','See Featured Products']

             },
             {
                 title:'Audio',
                 links:['Galaxy Buds Live','Buds+ BTS Edition','Galaxy Buds+','Galaxy Buds','Headphones','See Featured Products']

             },
             {
                 title:'Accessories',
                 links:['All Accessories','Phone Accessories','Tablet Accessories','Wearable Accessories']

             },
             {
                 title:'App & Services',
                 links:['Samsung Pay','Bixby','Samsung Health','Galaxy Store','Dex','Samsung Members','Shop Samsung App','Smart Switch','Samsung Money by SoFi','See Featured Apps'],

             },
             {
                 title:'Offers',
                 links:['Phone Offers','Partner Offers','Gaming Rewards','Galaxy Z Premier','More Offers']

             },
            ],  
               
    },
    /////////////////////////
    {
        id:3,
        name:"TV & Audio", 
        img:'tv.webp',
        link_1:'Change how you see TV.',
        link_2:'Learn more',
        link:[
            {
                title:'Featured',
                links:['2020 QLED TVs','2020 Lifestyle TVs','QLED for Gaming','QLED for Sports','Free Streaming at Home','Smart Tv']

            },
            {
                title:'TVs',
                links:['Shop All TVs','QLED 8K','QLED 4K','The Frame','The Terrace','The Terrace','The Sero','The Serif','Crystal 4K UHD','See Featured Products']

            },
            {
                title:'Home Audio',
                links:['All Home Audio','the Terrace Soundbar','Q Series Soundbar','T Series Soundbar','S Series Soundbar','Standerd Soundbar','Sound Tower','Subwoofers & Speaker Kits','See Featured Products']

            },
            {
                title:'Tv Accessories',
                links:['All TV Accessories','TV Stands','TV Wall Mounts','TV Bezels']

            },
            {
                title:'Offers',
                links:['TV & Home Audio Offers','Upgrade your TV','Samsung Financing','Samsung Access for TVs']

            }

        ]

    },
    ////////////////////////
    {
        id:4,
        name:"Home Appliances",
        img:'home.webp',
        link_1:'Connected Appliances: Run your home on your terms',
        link_2:'Learn More',
        link:[
            {
                title:'Featured',
                links:['Front Control Slide-in Ranges','AirDresser','Family Hub Refrigerator','Tuscan Stainless Steel Kitchen','Connected Appliances','Built-in Appliances','Top Picks for the Healthy Home','See Featured Products']
            },
            {
                title:'Kitchen',
                links:['Refrigerators','Ranges','Dishwashers','Wall Ovens','Cooktops & Hoods','Microwaves','Kitchen Packages','Kitchen Accessories','See Featured Products']

            },
            {
                title:'Laundry',
                links:['AirDresser','Washers','Dryers','Washer & Dryer Sets','Laundry Accessories','See Featured Products']

            },
            {
                title:'Vacuums & Floor Care',
                links:['Jet Stick Vacuums','Robot Vacuums','Robot Mop','Clean Station','Vacuums & Floor Care Accessories','See Featured Products']

            },
            {
                title:'Air Solutions',
                links:['Air Purifiers','Heating and Cooling','Air Solutions Accessories','See Featured Products']

            },
            {
                title:'Offers',
                links:['Home Appliances Offers','Kitchen Package Offers','Home Appliances Rebates']

            }
        ]
    },
    ////////////////////////
    {
        id:5,
        name:"Smart Home",
        img:'smart.webp',
        link_1:'SmartThings: Turn your home into a smart home',
        link_2:'Learn More',
        link:[
            {
                title:'Getting Started',
                links:['Introduction to Smart Product Package','Introduction to SmartThings']

            },
            {
                title:'Entertainment Packages',
                links:['Shoot and Watch in 8K','Turn to Social','Split Your Screen,See More','Set the Mood']

            },
            {
                title:'Home Monitoring Packages',
                links:['Check the Front Door from Your TV','Babysit from Any Room','Monitor Your Home From Your TV','Answer the Door from Your Fridge','Check the Fridge from Anywhere']

            },
            {
                title:'Laundry Packages',
                links:['Know Laundry Done Instantly','Do Laundry from Anywhere','Refresh Different Outfits at Once']

            },
            {
                title:'SmartThings Products',
                links:['SmartThings Cam','SmartThings Wifi','SmartThings Tracker','All SmartThings Products']

            }
        ]
    
    },
    ////////////////////////
    {
        id:6,
        name:"Computing",
        img:'computing.webp',
        link_1:'Trade-in and get up to $450 instantly toward Galaxy Tab S7 or S7+.',
        link_2:'Buy Now',
        link:[
            {
                title:'Featured',
                links:['Galaxy Chromebook','Galaxy Tab S6 Lite','Galaxy Book Flex','Galaxy Book Ion','Galaxy Book S','Galaxy Tab S6','Notebook 9 Pro','SSD Gaming','Odyssey Gaming Monitor']

            },
            {
                title:'Computers & Tablets',
                links:['All Computing','Galaxy Book','Windows Laptops','Chromebooks','Galaxy Tablets','Accessories']

            },
            {
                title:'Monitors',
                links:['All Monitors','Gaming','High Definition','Curved']

            },
            {
                title:'Memory & Storage',
                links:['All Memory & Storage','Internal SSD','Portable SSD','Memory Cards','USB Flash Drives']

            },
            {
                title:'Offers',
                links:['Computing Offers']

            }
        ]
    },
    ////////////////////////
    {
        id:6,
        name:"Offers",
        img:'offers.webp',
        link_1:'Buy 1 product and save 25% on a second one. Now ‘til Oct 3.',
        link_2:'Learn More',
        link:[
            {
                title:'Offers',
                links:['Featured Offers','Phones','TV & Home Theatre','Tablets, Watches & Accessories','Computing','Appliances & Smart Home','Kitchen Packages']

            },
            {
                title:'Discount Programs',
                links:['Samsung Discount Programs','Education Discounts','First Responder Discounts','Government Discounts','Military Discounts','Employee Discounts']

            },
            {
                title:'Tradi-in & Upgrade',
                links:['Mobile and Tablet Trade-in','Mobile Upgrade','TV Upgrade','Home Appliances Rebates']

            },
            {
                title:'Smart Ways to Shop',
                links:['TV & Phone Subscriptions','Samsung Financing','First Responders Discount','Military & Gov Discount','Samsung Referral Program','Samsung Referral Program','Samsung Rewards','Samsung Shop App','Samsung Mony by SoFi','Gaming Rewards']

            },
            {
                title:'Redeem Retail Offers',
                links:[]
            }
        ]
    }
    ////////////////////////////////////////////////////////////////////////////////
];

export const navlist_2=[
    {
        id:1,
        name:"Explore",
        img:'explore.webp',
        link_1:'How Khalid Balances Play and Work',
        link_2:'Read More',
        link:[
            {
                title:'Explore All',
                links:['Explore All','How to Work from Home and Win the Day','3 Ways Parents Can Boost Their Family Digital Security','5 Simple Time-Saving Tips','10 Minutes to Mindfulness']

            },
            {
                title:'Stories',
                links:['Photography','Life Hacks','Wellbeing','Entertainment']

            },
            {
                title:'How-To',
                links:['How-To']

            },
            {
                title:'Brand',
                links:['Brand','#TeamGalaxy','Corporate Citizenship']

            },
            {
                title:'Experiences',
                links:['Samsung Experience Stores','Samsung 837','Samsung in America','CES 2020']

            },
            {
                title:'Community',
                links:['Community']
            }
        ]
    },
    //////////////////
    {
        id:2,
        name:"Support",
        img:null,
        link_1:null,
        link_2:null,
        link:[
            {
                title:'Samsung Care+',
                links:['Mobile','TV & Home Appliances']
            },
            {
                title:'Product',
                links:['Product Support','Manuals & Downloads','Warranty','Register your Product','Community','Switching from iPhone'],

            },
            {
                title:'Order',
                links:['Order Support','Manage Orders','FAQs','Return Policy']

            },
            {
                title:'Repair Service',
                links:['Request Service','Find Repair Center']
            },
            {
                title:'Contact',
                links:['Contact Us']   
            }
        ]
    },
    /////////////////
    {
        id:3,
        name:"Business",
        link:[],
        img:null,
        link_1:null,
        link_2:null,
        
    }
]


export const navlist_3=[
    {
        name:'login',
        icon:<BsPerson/>
    },
    {
        name:'cart',
        icon:<AiOutlineShoppingCart/>
    },
    {
        name:'search',
        icon:<BsSearch/>
    },
    
    {
        name:'menu',
        icon:<GrMenu/>
    },
    {
        name:'close menu',
        icon:<GrClose/>
    }

    
]
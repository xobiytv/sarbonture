import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import img from '../assisent/5th-section.jpg'
const items = [
  {
    id: 1,
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Визовая поддержка. Авиа и ж/д билеты',
    // description:
    //   'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    id: 2,
    icon: <ConstructionRoundedIcon />,
    title: 'Транспортные услуги. Инсентив туры ',
    // description:
    //   'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    id: 3,
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Организация конференций. Проведение корпоративных мероприятий',
    // description:
    //   'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },

];
{/* <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  alignItems: 'center',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <b gutterBottom>
                    {item.title}
                  </b>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid> */}

export default function Highlights() {
  return (

    < div className="relative bg-[#0E1A70] " >
      <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
        <div className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8">
          <div className="flex-1 flex justify-center items-center" style={{ transform: 'translateX(0%) rotate(0deg) translateZ(0px)' }}>
            <img src={img} alt="get-started" className="w-[90%] rounded-full h-[90%] object-contain" />

          </div>
          <div className="flex-[0.75] flex justify-center flex-col" style={{ opacity: '1', transform: 'none' }}>

            <h2 className="mt-[8px] font-bold md:text-[34px] text-[40px] text-white undefined" style={{ opacity: '1', transform: 'none' }}>ЗАРУБЕЖНЫЕ ТУРЫ</h2>
            <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
              {items.map((item) => (
                <div key={item.id} className="flex justify-center items-center flex-row">
                  <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[24px] bg-[#323F5D]">
                    <p className="font-bold text-[20px] text-white">0{item.id}</p>
                  </div>
                  <p className="flex-1 ml-[30px] font-normal text-[19px] text-[#B0B0B0] leading-[22.4px]">{item.title}</p>
                </div>
              ))}


            </div>
          </div>
        </div>
      </section>
      <div className="gradient-04 z-0"></div>

    </div >

  );
}